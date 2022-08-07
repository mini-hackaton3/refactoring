import requests
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .models import Movie, Staff, Comment
from .serializers import CommentSerializer, MovieSerializer, StaffSerializer

@api_view()
def init_db(request):
  # Create your views here.
  url = "https://3ba69b48-a323-45dc-b276-e7ce9996535d.mock.pstmn.io/moviedata"
  res = requests.get(url)
  movies = res.json()['movies']

  '''
  중복 영화 거르기 : 87 > 66
  '''
  dict = {}
  movie_lst = []
  for movie in movies:
    if movie['title_kor'] not in dict:
      dict[movie['title_kor']] = 1
      movie_lst.append(movie)

  '''
  Movie db와 Staff db에 각각 적절한 값 넣어주기.
  Movie에서는 title_eng, Staff에서는 name을 unique 값으로 지정해,
  init_db가 두 번 돌아가지 않도록 설정해둠.
  '''
  for movie in movie_lst:
    one_movie = Movie()
    one_movie.title_kor = movie['title_kor']
    one_movie.title_eng = movie['title_eng']
    one_movie.poster_url = movie['poster_url']
    one_movie.rating_aud = movie['rating_aud']
    one_movie.rating_cri = movie['rating_cri']
    one_movie.rating_net = movie['rating_net']
    one_movie.genre = movie['genre']
    one_movie.genre = movie['showtimes']
    one_movie.release_date = movie['release_date']
    one_movie.rate = movie['rate']
    one_movie.summary = movie['summary']
    one_movie.save()
    
    for staff in movie['staff']:
      one_staff = Staff()
      one_staff.movie = Movie.objects.get(title_kor = movie['title_kor'])
      one_staff.name = staff['name']
      one_staff.role = staff['role']
      one_staff.image_url = staff['image_url']
      one_staff.save()
  return Response(status=status.HTTP_200_OK)

'''
모든 영화 목록 보기
'''
@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def get_all_movies(request):
  movies = Movie.objects.all()
  serializer = MovieSerializer(movies, many = True)
  return Response(serializer.data)

'''
영화 아이디 값으로 디테일 페이지 조회 (영화 정보 & 스태프 목록 리스트로 묶어 리턴함.)
'''
@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def get_one_movie(request, id):
  movie = Movie.objects.get(id = id)
  staff = Staff.objects.filter(movie_id = id)
  try:
    serializer = MovieSerializer(movie)
    serializer2 = StaffSerializer(staff, many = True)
    return Response([serializer.data, serializer2.data], status=status.HTTP_200_OK)
  except Movie.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)

'''
키워드로 영화 찾기 (한,영 둘 다 가능 / 띄어쓰기 지키기)
'''
@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def search(request):
  query = request.GET.get('query', None)
  if query:
        try:
            movies = Movie.objects.filter(title_eng__contains=query) | Movie.objects.filter(title_kor__contains=query)
            serializer = MovieSerializer(movies, many = True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Movie.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
  return Response(status=status.HTTP_400_BAD_REQUEST)


# -------------------------------이제부터 댓글 관련 함수-----------------------------------#
'''
모든 댓글 조회
'''
@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def view_all_comments(request):
  comments = Comment.objects.all()
  serializer = CommentSerializer(comments, many = True)
  return Response(serializer.data, status=status.HTTP_200_OK)

'''
디테일 페이지에 달린 댓글 목록 확인
'''
@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
def view_comments(request, id):
  movie = Movie.objects.get(id=id)
  comments = Comment.objects.filter(movie=movie.id)
  serializer = CommentSerializer(comments, many = True)
  return Response(serializer.data, status=status.HTTP_200_OK)

'''
디테일 페이지에서 댓글 달기 (로그인 사용자 한정)
'''
@api_view(["POST"])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def new_comment(request, id):
  serializer = CommentSerializer(data=request.data)
  if serializer.is_valid():
    serializer.validated_data['movie'] = Movie.objects.get(id=id)
    serializer.save(user = request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)
  return Response(status=status.HTTP_400_BAD_REQUEST)

'''
디테일 페이지에서 댓글 수정 (로그인 사용자 한정)
'''
@api_view(["GET", "POST"])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def re_comment(request, id):
  comment = Comment.objects.get(id=id)
  serializer = CommentSerializer(comment, data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)
  serializer = CommentSerializer(comment)
  return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

'''
디테일 페이지에서 댓글 삭제 (로그인 사용자 한정)
'''
@api_view(["DELETE"])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def delete_comment(request, id):
  comment = Comment.objects.get(id=id)
  comment.delete()
  return Response(status=status.HTTP_204_NO_CONTENT)

'''
내가 단 댓글 확인 (로그인 사용자 한정)
'''
@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def view_my_comments(request):
  user = request.user
  comments = Comment.objects.filter(user=user.id)
  serializer = CommentSerializer(comments, many = True)
  return Response(serializer.data, status=status.HTTP_200_OK)

