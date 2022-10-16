const NavigationSidebar = () => {
    return(`
       <div class="list-group">
            <div class="list-group-item">
                <i class="fab fa-twitter fa-1x"></i>
            </div>
            <div class="list-group-item">
                <i class="fas fa-home fa-1x"></i>
                <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Home</div>
            </div>
            <div class="list-group-item active">
                <i class="fas fa-hashtag fa-1x"></i>
                <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Explore</div>
            </div>
            <div class="list-group-item">
                <i class="fas fa-bell fa-1x"></i>
                <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Notifications</div>
            </div>
            <div class="list-group-item">
                <i class="fas fa-envelope fa-1x"></i>
                <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Messages</div>
            </div>
            <div class="list-group-item">
                <i class="fas fa-bookmark fa-1x"></i>
                <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Bookmarks</div>
            </div>
            <div class="list-group-item">
                <i class="fas fa-list fa-1x"></i>
                <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Lists</div>
            </div>
            <div class="list-group-item">
                <i class="fas fa-user fa-1x"></i>
                <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Profile</div>
            </div>
            <div class="list-group-item">
                <span class="fa-stack fa-1x" style="width: 1em">
                    <i class="fas fa-circle fa-stack-1x"></i>
                    <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse fa-xs"></i>
                </span>
                <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">More</div>
            </div>
        </div>
        <button class="btn btn-primary rounded-pill mt-1 w-100">Tuit</button>
 `);
}
export default NavigationSidebar;