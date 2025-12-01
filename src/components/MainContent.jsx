import CreatePost from './CreatePost';
import PostCollection from './PostCollection';
import Notifications from './Notifications';
import Profile from './Profile';

const MainContent = ({selectedTab, setSelectedTab}) => {
    switch(selectedTab) {
      case 'Home':
        return <PostCollection></PostCollection>
      case 'CreatePost' :
        return <CreatePost setSelectedTab={setSelectedTab}></CreatePost>
      case 'Notifications' :
        return <Notifications></Notifications>
      case 'Explore' :
        return <PostCollection></PostCollection>
      case 'Profile' : 
        return <Profile></Profile>
    }
}

export default MainContent;