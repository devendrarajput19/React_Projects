import "./App.css";
import Welcome from "./Welcome";
import { Button } from "./Button";
import { Hello } from "./Hello";
import { UserProfile } from "./UserProfile";
import { CandidateProfile } from "./CandidateProfile";
import { Product } from "./Product";
import { UserDetails } from "./UserDetails";
import { ProductList } from "./ProductList";
import { Alert } from "./Alert";
import { CustomButton } from "./CustomButton";
import { Contact } from "./Contact";
import { NewsLetter } from "./NewsLetter";
import { Menu } from "./Menu";

function App() {
  return (
    <div>
      <Menu />
      <Contact />
      <NewsLetter />
      <CustomButton text="Like" />
      <CustomButton text="Bookmark" />
      <Alert>Your changes has been saved...</Alert>
      <Alert type="error">Something went Wrong!!...</Alert>
      <ProductList />
      <UserDetails name="Devendra" isOnline={true} />
      <UserDetails name="Dev" isOnline={false} />
      <UserDetails name="Mahesh" isOnline={false} hideOffline={true} />
      <Product
        title="Gaming Laptop"
        price={49000}
        inStock={true}
        categories={["Electronics", "Computers", "Gaming"]}
      />
      <h1>Hello React...</h1>
      <Welcome name="Devendra" alias="Dev" />
      <Button />
      <Hello />
      <UserProfile />
      <CandidateProfile />
    </div>
  );
}

export default App;
