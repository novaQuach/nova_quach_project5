import React from 'react';

const Focus = ({ onChange, value }) => {
    //{ onChange} is equivalent to const onChange = props.onChange, deconstructing, hence when we want to refer to props.onChange, we only need to type in onChange.
    return (
        <div>
            <h1>What is your main focus today?</h1>
            <form action="">
                <label htmlFor="focus" />
                <input
                    value={value}
                    onChange={onChange}
                    id="focus"
                    type="text"
                />
            </form>
        </div>
    );
};

export default Focus;
