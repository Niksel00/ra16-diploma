import CartControl from "./CartControl";
import Logo from "./Logo";
import NavBar from "./Menu";
import SearchControl from "./Search/SearchControl";
import SearchForm from "./Search/SearchForm";

export default function Header() {
  return (
    <header class="container">
      <div class="row">
        <div class="col">
          <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <Logo />
            <div class="collapase navbar-collapse" id="navbarMain">
              <NavBar />
              <div>
                <div class="header-controls-pics">
                  <SearchControl />
                  <CartControl />
                </div>
                <SearchForm />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
