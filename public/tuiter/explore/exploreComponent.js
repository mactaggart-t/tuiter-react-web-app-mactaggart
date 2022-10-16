import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
           <ul class="mb-1 wd-searchbar-style">
                <li class="list-inline-item col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-10 align-middle m-0 p-0">
                    <div class="inner-addon left-addon">
                        <i class="fas fa-search"></i>
                        <input type="text"
                               class="form-control form-rounded"
                               id="input1"
                               placeholder="Search Tuiter">
                    </div>
                </li>
                <li class="list-inline-item align-middle m-0 p-0">
                    <i class="fa fa-cog fa-2x" style="color: #0d6efd"></i>
                </li>
            </ul>
            <ul class="nav nav-tabs mb-1">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-xxl-inline d-xl-inline d-lg-line d-md-inline d-sm-none">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div class="card">
                <div class="card-img-caption">
                    <b class="card-text">SpaceX's Starship</b>
                    <img src="spacexstarship.jpg"
                         class="card-img-top" alt="...">
                </div>
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;

