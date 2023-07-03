import React, { Children } from 'react'
import { useState } from 'react'
import './TwitterFollowCard.css'


function TwitterFollowCard(props) {
    const [isFollowing, setIsFollowing] = useState(props.isFollowing)
    const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is--following' : 'tw-followCard-follow'
    console.log(isFollowing)
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <section className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' 
                    alt="Avatar"
                    src={`https://unavatar.io/${props.userName}`} />
                <div className='tw-followCard-info'>
                    <strong> {props.children} </strong>
                    <span className='tw-followCard-nickname'> @{props.userName} </span>
                </div>
            </header>
            <aside className='tw-followCard-aside'> 
                <button className={`tw-followCard-button ${buttonClassName}`} onClick={handleClick}>
                    {isFollowing ? (
                        <span>
                        <span className='tw-followCard-text'>{textButton}</span>
                        <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                        </span> 
                    ) : (
                        <span className='tw-followCard-text'>{textButton}</span>
                    )}
                </button>
            </aside>
        </section>
    )
}

export {TwitterFollowCard};