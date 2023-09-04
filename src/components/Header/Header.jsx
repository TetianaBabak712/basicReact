import React from "react";
import Rating from "@mui/material/Rating";
import ShareIcon from '@mui/icons-material/Share';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../Footer/footer.css";  




function Header({ name, rating, genres=[], premiered, image, runtime, language }) {
  return (
    
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        width: "100%",
        padding: "20px",
      }}
    >
    
      <div style={{ marginLeft: "0.2rem" }}>
        <div style={{ display: "flex", alignItems: "left", fontSize: "1em" }}>
          <h1 style={{ color: "#fff", textTransform: "uppercase"}}>{name}</h1>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "30px",
            }}
          >
            {rating && rating.average !== null && (
              <>
                <Rating
                  name="half-rating-read"
                  value={rating.average / 2}
                  max={5}
                  size="medium"
                  style={{ color: "#D12E27", marginRight: "5px" }}
                  readOnly
                />
                <span
                  style={{
                    color: "#fff",
                    fontSize: "15px",
                  }}
                >
                  {rating.average.toFixed(1)}
                </span>
              </>
            )}
          </p>
        </div>
        
          <p
            style={{
              color: "#D12E27",
              fontSize: "20px",
              margin: "0",
            }}
          >
          {genres[0]}
            
          </p>
          
          <p
            style={{
              color: "#fff",
              fontSize: "20px",
            }}
          >
          {premiered} • {runtime} min • {language}</p>
        
        

        <FavoriteBorderIcon className='icon' fontSize="medium" style={{margin: "10px"}}/>
        <BookmarkAddIcon className='icon' fontSize="medium" style={{margin: "10px"}}/>
        <ShareIcon className='icon' fontSize="medium" style={{margin: "10px"}}/>
      </div>
      <div>
        <img
          src={image ? image.medium : ""}
          alt={name}
          style={{ width: "70%", height: "auto", marginRight: "5rem" }}
        />
      </div>
    </div>
    
  );
}

export default Header;