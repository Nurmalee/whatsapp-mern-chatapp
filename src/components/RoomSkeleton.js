import styled, { keyframes } from 'styled-components'

const RoomSkeleton = () => {
    return (
        <RoomSkeletonContainer>
            <AvatarSkeleton></AvatarSkeleton>
            <SkeletonDetails>
                <div></div>
                <p></p>
            </SkeletonDetails>
            <ShinnerWrapper>
                <Shinner />
            </ShinnerWrapper>
        </RoomSkeletonContainer>
    )
}

export default RoomSkeleton

const RoomSkeletonContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    padding-right: 0;
    position: relative;
    overflow: hidden;
`

const AvatarSkeleton = styled.div`
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-color: #ededed;
`

const SkeletonDetails = styled.div`
    padding: 18px 0;
    margin-left: 15px; 
    flex: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

    > div {
        height: 15px;
        width: 60%;
        background-color: #ededed;
        margin-bottom: 5px;
    }

    > p {
        height: 15px;
        width: 50%;
        background-color: #ededed;
    }
`

const shinner = keyframes`
  0% {
    transform: translateX(-150%);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(150%);
  }
`

const ShinnerWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    animation: ${shinner} 1.5s infinite;
`

const Shinner = styled.div`
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
    transform: skewX(15deg);
    height: 100%;
    width: 80%;
`