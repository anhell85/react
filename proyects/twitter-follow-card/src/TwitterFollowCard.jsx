import { useState } from "react";

export function TwitterFollowCard ({children, formatUserName, userName, initialIsFollowing}) {
  const [isFollowing, setFollowing] = useState(initialIsFollowing);
  const url = "https://unavatar.io/"+userName;
  const textFollow = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button tw-followCard-text';
  
  const handleClick = () => {
    setFollowing(!isFollowing)
  };
  
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img 
          className="tw-followCard-avatar"
          src={url}
          alt="avatar de usuario" />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{textFollow}</span> 
          <span className='tw-followCard-stopFollow'> Dejar de seguir </span>
        </button>
      </aside>
    </article>
  )
}