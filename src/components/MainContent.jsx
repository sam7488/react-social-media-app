import CreatePost from './CreatePost';
import PostCollection from './PostCollection';
import Notifications from './Notifications';

const MainContent = ({selectedTab}) => {
    switch(selectedTab) {
      case 'Home' :
        return <PostCollection></PostCollection>
      case 'CreatePost' :
        return <CreatePost></CreatePost>
      case 'Notifications' :
        return <Notifications></Notifications>
    }
}

export default MainContent;