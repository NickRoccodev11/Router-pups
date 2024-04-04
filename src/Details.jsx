import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Details = ({ BASE_URL }) => {
  const [singlePuppy, setSinglePuppy] = useState();
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchSinglePuppy = async (id) => {
      const res = await fetch(`${BASE_URL}/players/${id}`);
      const puppyData = await res.json();
      setSinglePuppy(puppyData.data.player);
    }
    fetchSinglePuppy(id);
  }, [id])

  const handleDelete = async (puppyId) => {
    try {
      await fetch(`${BASE_URL}/players/${puppyId}`, {
        method: 'DELETE',
      });
    } catch (err) {
      console.error(err.message)
    }
    navigate("/")
  }

  return (
    <div id="single-view">
      {singlePuppy ?
        <>
          <h2>{singlePuppy.name || "Generic Puppy"}</h2>
          <img
            src={singlePuppy.imageUrl}
            alt={`a picture of ${singlePuppy.name}`}
          />
          <div className="details">
            <p> Breed:  <span> {singlePuppy.breed ? singlePuppy.breed : "N/A"}</span></p>
            <p> Status:  <span>{singlePuppy.status ? (singlePuppy.status === "field" ?
              "On the field" : "Benched") : "N/A"}</span> </p>
          </div>
          <Link to="/">
            <button className="button-style">
              back to Puppy List
            </button>
          </Link>
          <button
            className="delete-button"
            onClick={() => {
              handleDelete(singlePuppy.id)
            }}
          >
            Delete puppy  </button>
        </> :
        <p>Loading...</p>
      }
    </div>
  )
}

export default Details