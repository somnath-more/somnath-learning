import "./App.css";
// import NestedCheckBox from "./components/organisms/NestedCheckBox";
import TrafficLight from "./components/organisms/TrafficLight";
// import ImageCarousel from "./components/organisms/Carousal";
// import NestedCheckBox from "./components/organisms/NestedCheckBox";
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
//  const IMAGES = [
//   {
//     src: 'https://picsum.photos/id/600/600/400',
//     alt: 'Forest',
//   },
//   {
//     src: 'https://picsum.photos/id/100/600/400',
//     alt: 'Beach',
//   },
//   {
//     src: 'https://picsum.photos/id/200/600/400',
//     alt: 'Yak',
//   },
//   {
//     src: 'https://picsum.photos/id/300/600/400',
//     alt: 'Hay',
//   },
//   {
//     src: 'https://picsum.photos/id/400/600/400',
//     alt: 'Plants',
//   },
//   {
//     src: 'https://picsum.photos/id/500/600/400',
//     alt: 'Building',
//   },
// ];


const checkboxesData = [
  {
    id: 1,
    name: 'Electronics',
    checked: false,
    children: [
      {
        id: 2,
        name: 'Mobile phones',
        checked: false,
        children: [
          {
            id: 3,
            name: 'iPhone',
            checked: false,
          },
          {
            id: 4,
            name: 'Android',
            checked: false,
          },
        ],
      },
      {
        id: 5,
        name: 'Laptops',
        checked: false,
        children: [
          {
            id: 6,
            name: 'MacBook',
            checked: false,
          },
          {
            id: 7,
            name: 'Surface Pro',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Books',
    checked: false,
    children: [
      {
        id: 9,
        name: 'Fiction',
        checked: false,
      },
      {
        id: 10,
        name: 'Non-fiction',
        checked: false,
      },
    ],
  },
  {
    id: 11,
    name: 'Toys',
    checked: false,
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
       {/* <ImageCarousel images={IMAGES}/>
        */}
        {/* <NestedCheckBox checkBoxData={checkboxesData}/>
         */}
         <TrafficLight/>
    </>
  );
}

export default App;
