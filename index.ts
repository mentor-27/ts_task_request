interface IPost {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<IPost[]> => {
  const resp = await fetch(url);
  return await resp.json();
};

getData(COMMENTS_URL).then(data =>
  data.forEach(post => console.log(`ID: ${post.id}, Email: ${post.email}`))
);

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
