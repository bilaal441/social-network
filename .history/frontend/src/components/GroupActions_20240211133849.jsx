import Action from "./Action";
import MyModal from "./Modal";
import User from "./User";
import classes from "./ProfileActions.module.css";
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import EventList from "./EventList";

const GroupActions = ({
  group,
  handleClose,
  handleShow,
  show,
  flag,
  toggleAction,
  isActive,
  fetchMoreFellowers,
  hasMoreFellowers,
  owner,
  status,
}) => {
  console.log(group[isActive]);
  return (
    <MyModal
      handleClose={handleClose}
      handleShow={handleShow}
      show={show}
      flag={flag}
    >
      <ul className={classes.actions}>
        {status ? (
          <>
            <Action
              numberAction={group.NumberOfMembers}
              actionName={"Members"}
              toggleAction={toggleAction}
              active={isActive}
            />
            <Action
              numberAction={group.NumberOfEvents}
              actionName={"Events"}
              toggleAction={toggleAction}
              active={isActive}
            />
          </>
        ) : (
          <>
            <Action
              numberAction={""}
              actionName={"Invite Members"}
              toggleAction={toggleAction}
              active={isActive}
            />
            {owner && (
              <Action
                numberAction={group.Requests}
                actionName={"Requests"}
                toggleAction={toggleAction}
                active={isActive}
              />
            )}
          </>
        )}
      </ul>
      <div>
        <ul>
          <InfiniteScroll
            dataLength={group[`NumberOf${isActive}`] || 0}
            next={fetchMoreFellowers}
            hasMore={hasMoreFellowers[isActive]}
            loader={<h4>Loading...</h4>}
            height={400}
            endMessage={
              <p style={{textAlign: "center"}}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            className={classes.followers}
          >
            {isActive === "invites" &&
              group[isActive]?.map((user, i) => (
                <li key={i} className={classes.item}>
                  <Link to={`/profile/${i}`} className={classes.links}>
                    <User
                      userName={`${user.username} ${i + 1}`}
                      isLoggedIn={true}
                      name={user.name}
                    />
                  </Link>
                </li>
              ))}

            {isActive === "Members" &&
              group[isActive]?.map((user, i) => (
                <li key={i} className={classes.item}>
                  <Link to={`/profile/${i}`} className={classes.links}>
                    <User
                      userName={`${user.username} ${i + 1}`}
                      isLoggedIn={true}
                      name={user.name}
                    />
                  </Link>
                </li>
              ))}

            {isActive === "Events" &&
              group[isActive]?.map((event, i) => (
                <EventList key={event.id} event={event} />
              ))}
          </InfiniteScroll>
        </ul>
      </div>
    </MyModal>
  );
};

export default GroupActions;
