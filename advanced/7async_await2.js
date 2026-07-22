function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 1000);
  });
}

function fetchCommnetsData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comments data fetched");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("fetching blog data..");
    // Using await
    // const blogData = await fetchPostData();
    // const commentsData = await fetchCommnetsData();
    // console.log("fetch complete");
    const [blogData, commentsData] = await Promise.all([
      fetchPostData(),
      fetchCommnetsData(),
    ]);
    console.log(blogData + "\n" + commentsData);
  } catch (error) {
    console.log("Error fetching blog data");
  }
}

getBlogData();
