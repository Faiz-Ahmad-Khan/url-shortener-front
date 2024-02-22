import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [shortUrls, setShortUrls] = useState([]);
  const [fullUrl, setFullUrl] = useState('');

  useEffect(() => {
    fetchShortUrls();
  }, []);

  const fetchShortUrls = async () => {
    try {
      const response = await fetch('http://localhost:5000/shortUrls');
      const data = await response.json();
      setShortUrls(data);
    } catch (error) {
      console.error('Error fetching short URLs:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/shortUrls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullUrl }),
      });
      setFullUrl('');
      fetchShortUrls();
    } catch (error) {
      console.error('Error creating short URL:', error);
    }
  };

  return (
    <div className="container">
      <h1>URL Shrinker</h1>
      <form onSubmit={handleSubmit} className="my-4 form-inline">
        <label htmlFor="fullUrl" className="sr-only">
          Url
        </label>
        <input
          required
          placeholder="Enter Url"
          type="url"
          value={fullUrl}
          onChange={(e) => setFullUrl(e.target.value)}
          id="fullUrl"
          className="form-control"
        />
        <button className="btn btn-success" type="submit">
          Shrink
        </button>
      </form>

      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th>Full URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {shortUrls.map((shortUrl) => (
            <tr key={shortUrl._id}>
              <td>
                <a href={shortUrl.full}>{shortUrl.full}</a>
              </td>
              <td>
                <a href={shortUrl.full}>{shortUrl.short}</a>
              </td>
              <td>{shortUrl.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;