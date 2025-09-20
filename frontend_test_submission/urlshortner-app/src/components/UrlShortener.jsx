import React, { useState } from "react";
import axios from "axios";
import UrlForm from "./UrlForm";
import UrlResult from "./UrlResult";

const UrlShortener = () => {
  const [urls, setUrls] = useState([{ longUrl: "", validity: "", shortcode: "" }]);
  const [results, setResults] = useState([]);

  // Add a new URL input (max 5)
  const addUrlInput = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: "", validity: "", shortcode: "" }]);
    }
  };

  // Handle input change
  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  // Simple client-side validation
  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate inputs
    for (let u of urls) {
      if (!validateUrl(u.longUrl)) {
        alert("Invalid URL: " + u.longUrl);
        return;
      }
      if (u.validity && isNaN(Number(u.validity))) {
        alert("Validity must be a number (minutes).");
        return;
      }
    }

    try {
      const response = await axios.post("http://localhost:5000/api/shorten", { urls });
      setResults(response.data); // assume backend returns [{shortUrl, expiry, originalUrl}]
    } catch (err) {
      console.error(err);
      alert("Error shortening URLs");
    }
  };

  return (
    <div className="url-shortener">
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        {urls.map((u, i) => (
          <UrlForm
            key={i}
            index={i}
            data={u}
            onChange={handleChange}
          />
        ))}
        {urls.length < 5 && (
          <button type="button" onClick={addUrlInput}>
            + Add another URL
          </button>
        )}
        <button type="submit">Shorten</button>
      </form>

      <div className="results">
        {results.map((res, i) => (
          <UrlResult key={i} data={res} />
        ))}
      </div>
    </div>
  );
};

export default UrlShortener;
