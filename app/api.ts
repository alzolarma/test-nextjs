const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

async function handleGet(req, res) {
  try {
    const response = await fetch(BASE_URL); 
    const posts = await response.json();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Fallo al obtener los posts.' });
  }
}

async function handlePost(req, res) {
  try {
    const postData = req.body;
    const response = await fetch(BASE_URL, { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });

    const createdPost = await response.json();
    res.status(201).json(createdPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Fallo al crear el post.' });
  }
}

async function handlePut(req, res) {
  try {
    const { id, ...updateData } = req.body;
    
    if (!id) {
      return res.status(400).json({ error: 'Se requiere el ID del post para actualizar (PUT).' });
    }

    const response = await fetch(`${BASE_URL}/${id}`, { 
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData),
    });

    const updatedPost = await response.json();
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Fallo al actualizar el post.' });
  }
}

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return handleGet(req, res);
    case 'POST':
      return handlePost(req, res);
    case 'PUT':
      return handlePut(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}