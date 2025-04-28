import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import NavBar from "./components/NavBar"
// import NavBarRoutes from './components/NavBarRoutes'
// import About from "./components/Mobiles"
import Electronics from "./components/Electronics"
import Shoes from "./components/Shoes"
import TopOffer from "./components/TopOffer"
import WishList from "./components/WishList"
import CartData from "./components/CartData"
import Mobiles from './components/Mobiles'
import ContactUs from './components/ContactUs'
import SignUp from './components/SignUp'
import Login from './components/Login'
// import AddData from './SellerComponent/AddMobile'
import ForgotPassword from './components/ForgotPassword'
import Home from './components/Home'
import HomePage from './components/HomePage'
import { BuyNow } from './components/BuyNow'
import DisplayMobile from './SellerComponent/DisplayMobile'
import AddMobile from './SellerComponent/AddMobile'
import DisplayShoes from './SellerComponent/DisplayShoes'
import DisplayElectronics from './SellerComponent/DisplayElectronics'
import AddElectronics from './SellerComponent/AddElectronics'
import AddShoes from './SellerComponent/AddShoes'
import EditShoes from './SellerComponent/EditShoes'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // Blue color
    },
    secondary: {
      main: '#dc004e',  // Pink color
    },
  },
});

function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/HomePage" element={<HomePage />}></Route>
            <Route path="/Mobile" element={<Mobiles />}></Route>
            <Route path="/Electronics" element={<Electronics />}></Route>
            <Route path="/Shoes" element={<Shoes />} />
            <Route path="/TopOffer" element={<TopOffer />} />
            <Route path="/WishList" element={<WishList />} />
            <Route path="/Cart" element={<CartData />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            {/* <Route path="/AddData" element={<AddData />} /> */}
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/BuyNow" element={<BuyNow />} />
            <Route path="/AddMobile" element={<AddMobile />} />
            <Route path="/DisplayMobiles" element={<DisplayMobile />} />
            <Route path="/DisplayShoes" element={<DisplayShoes />} />
            <Route path="/DisplayElectronics" element={<DisplayElectronics />} />
            <Route path="/AddElectronics" element={<AddElectronics />} />
            <Route path="/AddShoes" element={<AddShoes />} />
            <Route path="/editShoes/:id" element={<EditShoes />} />
          </Routes>
        </Router>
      </ThemeProvider>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/Mobile" element={<Mobiles />}></Route>
          <Route path="/Electronics" element={<Electronics />}></Route>
          <Route path="/Shoes" element={<Shoes />} />
          <Route path="/TopOffer" element={<TopOffer />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/Cart" element={<CartData />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/AddData" element={<AddData />} /> */}
      {/* <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/BuyNow" element={<BuyNow />} />
      <Route path="/AddMobile" element={<AddMobile />} />
      <Route path="/DisplayMobiles" element={<DisplayMobile />} />
      <Route path="/DisplayShoes" element={<DisplayShoes />} />
      <Route path="/DisplayElectronics" element={<DisplayElectronics />} />
      <Route path="/AddElectronics" element={<AddElectronics />} />
      <Route path="/AddShoes" element={<AddShoes />} />
      <Route path="/editShoes/:id" element={<EditShoes />} /> */}
      {/* </Routes> */}
      {/* </Router> */}
    </>
  )
}

export default App
