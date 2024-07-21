import { useState } from "react";
function Accordion() {
  const [isActive, setIsActive] = useState(false);

  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "Section 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];

  const handleClick = (index) => {
    setIsActive(isActive === index ? null : index);
  };

  return (
    <div>
      {accordionData.map((section, index) => (
        <div key={index}>
          <div onClick={() => handleClick(index)}>
            {section.title} {isActive === index ? "-" : "+"}
          </div>
          {isActive === index && <div>{section.content}</div>}
        </div>
      ))}
    </div>
  );
}
export default Accordion;
