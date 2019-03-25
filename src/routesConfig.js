import Home from './pages/home/Home';
import User from './pages/user/User';
import Profile from './pages/profile/Profile';

const routesConfig = [
  {
    path:"/",
    component:Home,
    exact:true
  },
  {
    path:"/user",
    component:User,
    exact:true
  },
  {
    path:"/profile",
    component:Profile,
    exact:true
  },
]

export default routesConfig;