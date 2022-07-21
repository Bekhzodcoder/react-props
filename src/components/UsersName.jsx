import React from 'react';

const UsersName = ({name, email}) => {

    const styl = {
        display:'flex',
        flexFlow:'column',
        alignItems:'start',
        marginLeft:'12px'
    }
    return (
        <>
          <section style={styl}>
            <h2>{name}</h2>  
            <h3>
                <a href={email}>
                    {email}
                </a>
            </h3>
          </section>  
        </>
    );
};

export default UsersName;