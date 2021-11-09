import React from 'react';
import axios from 'axios';
import Movie from './movie';
import './App.css';
//영화 데이터를 로딩하기위해 fetch 대신 axios를 사용함

class App extends React.Component {
// React.Component를 상속한다.
state = {
  isLoading:true,
  movies:[],
};
getMovies = async ()=>{
  const {
    data:{
      data:{movies},
    },
  }  = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
  this.setState({movies, isLoading: false}); 
  //state의 movies와 axios.get()의 movie 변수 이름이 같아서 하나의 movies로 축약가능 (원래는 moview:moview)
  
};
//axios.get이 반환한 결과를 movie에 저장한다. 
//async = getMovies()함수는 비동기라서 기다려야해
//await = getMovies()함수 내부의 axios.get()의 실행 완료를 기다렷다가 끝나면 진행해줘

componentDidMount(){
  this.getMovies();
}
  
  render(){                             //클래스형 컴포넌트에서 JSX를 반환하기 위해서는 render() 함수를 사용
      const { isLoading, movies} = this.state;
      return (
      <section className="container">
        {isLoading ? ( //삼항연산, 로딩중이면 "loading", 아니면 영화정보 map함수이용 띄우기
          <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (  
      <div className="movies">
        {movies.map(movie =>(
          <Movie
            key ={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
          />
        ))}
      </div>
      )}
    </section>
      );
}
}
  


//함수형 컴포넌트는 return문이 JSX를 반환
//클래스형 컴포넌트는 render()함수가 JSX를 반환 -> 리액트는 클래스형 컴포넌트의 render()함수를 자동으로 실행

export default App;