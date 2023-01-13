const logo = (
  <a href="/">
    <div>
      <img
        className="logo"
        src="https://10619-2.s.cdn12.com/rests/original/340_328462255.jpg"
        alt="Food Villa"
      />
    </div>
  </a>
);

const Header = () => {
  return (
    <div className="headerContainer">
      {logo}
      <div class="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
