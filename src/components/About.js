import React from 'react';

const About = (props) => {
    console.log(props);
    setTimeout( () => {
        props.history.push('/');
    },2000)


    return (
    <div className="container center about">
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut incidunt repellat modi adipisci at nostrum sequi veniam libero non autem optio dignissimos unde, quae quam? Recusandae architecto commodi nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut incidunt repellat modi adipisci at nostrum sequi veniam libero non autem optio dignissimos unde, quae quam? Recusandae architecto commodi nihil?</p>
    </div>
    )
}

export default About;