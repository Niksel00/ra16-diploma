import bannerImg from "../../img/banner.jpg";

export default function Banner() {
  return (
    <div class="banner">
      <img src={bannerImg} class="img-fluid" alt="К весне готовы!" />
      <h2 class="banner-header">К весне готовы!</h2>
    </div>
  );
}
