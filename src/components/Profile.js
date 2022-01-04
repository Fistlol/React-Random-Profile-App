import React from 'react';
import './Profile.css';

export default class Profile extends React.Component {

    render() {
        return (
            <div className="info-container">
                <img src={this.props.person.photo} alt="person" class="image" />
                <p>{this.props.person.name}</p>
                <p>Age: {this.props.person.age}</p>
                <p>Country: {this.props.person.country}</p><br />
                <div><b>Skills:</b>
                    <ul>
                        {this.props.person.skills.map(listItem => {
                            return (<li>{listItem}</li>)
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

// interface Props {
//     profile: Profile;
// };

// const Profile: React.FunctionComponent<Props> = (props: Props) => {
//     const {profile} = props;

//     return (
//         <div>
//             {/* <img src="" alt="" /> */}
//             <p>{profile.name}</p>
//             <p>{profile.age}</p>
//             <p>{profile.country}</p>
//             <p>{profile.skills}</p>
//         </div>
//     )
// }

// export default Profile;