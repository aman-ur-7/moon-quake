import React from "react";
import { ImClock } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";
import { VscProject } from "react-icons/vsc";
import { LiaAwardSolid } from "react-icons/lia";

const NumberCounts = () => {
  return (
    <section className="number-counts">
      <div>
        <BsEmojiSmile size={40} />
        <div>
          <span>8</span>
          <p>Happy Clients</p>
        </div>
      </div>
      <div>
        <VscProject size={40} />
        <div>
          <span>22</span>
          <p>Projects</p>
        </div>
      </div>
      <div>
        <ImClock size={40} />
        <div>
          <span>16</span>
          <p>Years of experience</p>
        </div>
      </div>
      <div>
        <LiaAwardSolid size={40} />
        <div>
          <span>10</span>
          <p>Awards</p>
        </div>
      </div>
    </section>
  );
};

export default NumberCounts;
