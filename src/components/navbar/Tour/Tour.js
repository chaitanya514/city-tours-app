import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
import "./Tour.scss";

export default class Tour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showInfo: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState(state => ({
          showInfo: !state.showInfo
        }));
      }
    render() {
    const {image,city,place,info} = this.props.tour;

    const {showInfo} = this.state;
        return (
            <article className="tour">
                <div className="img-container">
                    <img
                        src={image}
                        alt=""
                    />
                    <span className="close-btn">
                        <FontAwesomeIcon icon={faWindowClose} />
                    </span>
                </div>

                <div className="tour-info">
                    <h1>{city}</h1>
                    <h2>{place}</h2>
                    <h3>info {""}
                        <span onClick= {this.handleClick}>
                            <FontAwesomeIcon icon={faCaretSquareDown} />
                        </span>
                    </h3>
                   {showInfo? <p>
                        {info}
                     </p>:null}

                </div>


            </article>
        )
    }
}