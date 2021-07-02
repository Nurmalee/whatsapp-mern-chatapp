import styled from 'styled-components'

const RoomSkeleton = () => {
    return (
        <RoomSkeletonContainer>
            <AvatarSkeleton></AvatarSkeleton>
            <SkeletonDetails>
                <div></div>
                <p></p>
            </SkeletonDetails>
        </RoomSkeletonContainer>
    )
}

export default RoomSkeleton

const RoomSkeletonContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    padding-right: 0;
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
        width: 80%;
        background-color: #ededed;
    }
`