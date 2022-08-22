import { Popup } from "../../Popup/Popup";
import React,{ useState } from "react";
import "./Video.scss";
import { Fact } from "../Fact/Fact";
export const Video = (props)=> {
    const [visible, setVisible] = useState(false);
    const openModal = () => {
        setVisible(true);
      };
      const closeModal = () => {
        setVisible(false);
      };
    return (
        <div className="video-section pd-section">
           <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="cl-header">
                  <h2 className="title">Know More About <span>Megabytetech</span></h2>
                  <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa us. 
                  </p>
                </div>
                <div className="video-wrap" onClick={() => {
                    openModal();
                }}>
                    <img src="Images/banner.png" />
                    <div className="video-icon"
                    >
                        <i className="fa fa-play"></i>
                    </div>
                </div>
              </div>
              <div className="col-lg-7">
                <Fact />
              </div>
            </div>
           </div>
             {/* true check gareko  */}
         {visible && (
            <Popup
              visible={visible}
              closeModal={closeModal}
              renderComponent={
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/0ln-Uukt9gA" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              }
            />
          )}
        </div>
       
    )
}