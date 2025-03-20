import "./App.css";
import Login from "./component/Login/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./component/Auth/PrivateRoute";
import PropertyList from "./component/Property/PropertyList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/properties" component={PropertyList} />
            <Route path={"/"} render={() => <Redirect to="/login" />} />
          </Switch>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
