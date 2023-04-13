import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import App from '../App';
import Videos from '../pages/Videos';
import VideoDetail from '../pages/VideoDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: 'videos', element: <Videos /> },
      { path: 'videos/:keyword', element: <Videos /> },
      { path: 'videos/watch/:videoId', element: <VideoDetail /> },
    ],
  },
]);
