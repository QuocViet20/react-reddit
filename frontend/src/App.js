import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import EditPage from "./Components/Edit/EditPage";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/Header";
import MakePost from "./Components/Post/MakePost";
import Posts from "./Components/Post/Posts";

function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpen] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  console.log(pending, error);

  return (
    <div className="App">
      {isEdit ? (
        <EditPage setEdit={setEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />
          <Posts />
          <Footer isOpenPost={isOpenPost} setOpen={setOpen} />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
          <MakePost setOpen={setOpen} />
        </>
      )}
      {pending && <p className="loading">Loading ...</p>}
      {!isEdit && error && (
        <p className="error">Error when fetching data from server</p>
      )}
    </div>
  );
}

export default App;
