const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <ul class="p-0">
                <li class="list-inline-item col-10 align-middle">
                    <span class="wd-small-gray-font">${post.topic}</span>
                    <br/>
                    <span class="wd-medium-white-font">
                        <b>${post.userName}</b>
                        <span class="fa-stack fa-1x" style="width: 1.5em">
                            <i class="fas fa-circle fa-stack-1x"></i>
                            <i class="fas fa-check fa-stack-1x fa-inverse fa-xs"></i>
                        </span>
                    </span>
                    <span class="wd-small-gray-font">- ${post.time}</span>
                    <br/>
                    <span class="wd-medium-white-font">
                        <b>${post.title}</b>
                    </span>
                    <br/>
                    <span class="wd-small-gray-font">${post.tweets} Tuits</span>
                </li>
                <li class="list-inline-item align-middle">
                    <img src="${post.image}" alt="react" class="rounded"
                         width="72px" height="72px">
                </li>
            </ul>
        </li>
    `)
}

export default PostSummaryItem