import React from 'react';
import Navbar from "../components/Navbar";

class TeamContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            teamList:
                [
                    {
                        name: 'Person 1',
                        role: 'CTO',
                        imageUrl: 'https://i.pinimg.com/originals/f9/77/67/f97767b7a3294695cdf1f14b47f040d4.png'
                    },
                    {
                        name: 'Person 2',
                        role: 'Senior Software Engineer',
                        imageUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-indian-girl.png'
                    },
                    {
                        name: 'Person 3',
                        role: 'Project Manager',
                        imageUrl: 'http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png'
                    },
                    {
                        name: 'Person 4',
                        role: 'Senior Database Administrator',
                        imageUrl: 'https://openclipart.org/image/2400px/svg_to_png/277084/Male-Avatar-3.png'
                    },
                    {
                        name: 'Person 5',
                        role: 'Software Engineer',
                        imageUrl: 'https://pickaface.net/gallery/avatar/79322855_180418_0952_17ey.png'
                    },
                    {
                        name: 'Person 6',
                        role: 'Team Lead',
                        imageUrl: 'https://pickaface.net/gallery/avatar/79322855_180418_1015_9eitri.png'
                    },
                    {
                        name: 'Person 7',
                        role: 'HR Manager',
                        imageUrl: 'https://avatarfiles.alphacoders.com/115/115265.png'
                    },
                    {
                        name: 'Person 8',
                        role: 'Front End Developer',
                        imageUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-eskimo-girl.png'
                    },
                    {
                        name: 'Person 9',
                        role: 'Senior Front End Developer',
                        imageUrl: 'https://3.bp.blogspot.com/-L7n3DyxunLw/WZMOeSE27FI/AAAAAAAAP3Q/1868neSrNIsIknc4vH4XUcJ6ueGDsQO8ACLcBGAs/s1600/facebook-profile-pic.jpg'
                    },
                    {
                        name: 'Person 10',
                        role: 'Software Architect',
                        imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/cjsocool89-profile_image-17088d71f71dc8e5-300x300.png'
                    }
                ]
        }
    }

    populateMemberList = () => {
        const members = this.state.teamList.map((member,index) =>
            <div className="col-xs-10 offset-xs-1 col-sm-4 " key={index}>
                <figure className="figure">
                    <img src={member.imageUrl} className="figure-img img-fluid rounded" alt={member.name} width="300" height="300"/>
                    <figcaption className="figure-caption text-center">{`${member.name}, ${member.role}`}</figcaption>
                </figure>
            </div>
        );
        return members;
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Team Members</h1>
                <hr/>
                <div className="row justify-content-center">
                    {this.populateMemberList()}
                </div>
            </div>
        )
    }
}
export default TeamContainer;
