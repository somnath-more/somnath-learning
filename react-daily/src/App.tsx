import "./App.css";
import ImageCarousel from "./components/organisms/Carousal";
// import Clock from "./components/organisms/Clock";
// import NestedO`bject from "./components/organisms/NestedObject";
// import Datatable from "./components/organisms/Pagination";
// import LearningBootstrap from './components/organisms/LearningBootstrap';
// import SignUp from './components/organisms/LearningBootstrap/signup'
// import TicTacToe from './components/organisms/TicTacToe'
// import SignInForm from './components/organisms/SignInForm'
// import A from './components/hooks/UseContext/A'
// import Rerender from './components/organisms/Rerender/Rerender'
// import UseMemo from './components/hooks/UseMemo'
// import Reducer from './components/hooks/UseReducer'
// import CustomHook from './components/organisms/CustomHook';
// import TodoList from './components/organisms/TodoList';
 const IMAGES = [
  {
    src: 'https://picsum.photos/id/600/600/400',
    alt: 'Forest',
  },
  {
    src: 'https://picsum.photos/id/100/600/400',
    alt: 'Beach',
  },
  {
    src: 'https://picsum.photos/id/200/600/400',
    alt: 'Yak',
  },
  {
    src: 'https://picsum.photos/id/300/600/400',
    alt: 'Hay',
  },
  {
    src: 'https://picsum.photos/id/400/600/400',
    alt: 'Plants',
  },
  {
    src: 'https://picsum.photos/id/500/600/400',
    alt: 'Building',
  },
];




function App() {
  return (
    <>
     {/* <TodoList/> */}
     {/* <CustomHook/> */}
     {/* <Reducer/>
     <UseMemo/> */}
       {/* <Rerender/>
        */}
        {/* <SignInForm/> */}
        {/* <LearningBootstrap/>
         */}
         {/* <SignUp/> */}
         {/* <TicTacToe/> */}
     {/* <A/> */}
      {/* <TodoList/> */}
      {/* <CustomHook/> */}
   
      {/* <SignInForm/> */}
      {/* <SignUp/> */}
      {/* <TicTacToe/> */}
      {/* <A/> */}
      {/* <Datatable/>
       */}
       {/* <NestedObject/> */}
       {/* <Clock/> */}
       <ImageCarousel images={IMAGES}/>
    </>
  );
}

export default App;
