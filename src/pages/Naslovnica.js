import { useEffect, useState } from "react";

import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';

function Naslovnica() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch("https://front3.edukacija.online/backend/wp-json/wp/v2/pages/30")
      .then((res) => res.json())
      .then((data) => setPage(data));
  }, []);

  if (!page) return <p>Učitavanje</p>;

  return (
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
  );
}

export default Naslovnica;