import React, { Component, Fragment } from 'react';
import { connect } from  "react-redux"
import { createProfile, getCurrentProfile} from "../../actions/profileAction"
import Proptypes from "prop-types";
import {Link, withRouter} from "react-router-dom"

class EditProfile extends Component {
  

    componentWillReceiveProps(nextProps, nextState){
        const {company,bio,githubusername, youtube, 
            facebook, twitter, instagram, linkedin,
             website,location,status,skills } = nextProps.profile
        this.setState({
            company,bio,githubusername, youtube, 
            facebook, twitter, instagram, linkedin,
             website,location,status,skills
        })
      }


      componentDidMount(){
    this.props.getCurrentProfile()
    }

    state = {  
        company:" ",
        bio:" ",
        githubusername:" ", 
        youtube:" ",
         facebook:" " , 
        twitter:'', 
        linkedin:'',
        website:" ",
        location:" ", 
        status:" ",
        skills:" ",
    showSocial:false
}
    
  // onchange handler
  onChange=(e)=>this.setState(
    {[e.target.name]:e.target.value})

onSubmit = e =>{
    const { createProfile, history} = this.props
    e.preventDefault()
    const {company,bio,githubusername, youtube, 
        facebook, twitter, instagram, linkedin,
         website,location,status,skills} 
    = this.state
        
        const post ={
            company,bio,githubusername, youtube, 
        facebook, twitter, instagram, linkedin,
         website,location,status,skills
        }


        createProfile(post, history)
}


    render() { 
        const {getCurrentProfile} = this.props
        const {profile,loading} = this.props.profile


        const {company,bio,githubusername, youtube, facebook, 
            twitter, instagram, linkedin,
            website,location,status,skills} 
             = this.state
        
        
             const {showSocial}= this.state
        return ( 
            <div>
                
      <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>



      <form className="form" onSubmit ={this.onSubmit}>
        <div className="form-group">
       
          <select name="status" onChange={this.onChange} value={status}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text"> Give us an idea of where you are at in your career</small>
        </div>
        <div className="form-group">
          <input type="text"
           placeholder="Company" 
           value={company} 
           onChange={this.onChange}
           name="company" />
          <small className="form-text"
            >Could be your own company or one you work for</small
          >
        </div>
        <div className="form-group">
          <input type="text" 
          placeholder="Website"
          value={website} 
          onChange={this.onChange}
          name="website" />
          <small className="form-text"
            >Could be your own or a company website</small
          >
        </div>
        <div className="form-group">
          <input type="text" 
          placeholder="Location"  
          value={location} 
          onChange={this.onChange}
          name="location" />
          <small className="form-text"
            >City & state suggested (eg. Boston, MA)</small
          >
        </div>
        <div className="form-group">
          <input type="text"
          value={skills}
          onChange={this.onChange}
          placeholder="* Skills" 
          name="skills" />
          <small className="form-text"
            >Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</small
          >
        </div>
        <div className="form-group">
          <input
            type="text"
            onChange={this.onChange}
                value={githubusername}
            placeholder="Github Username"
            name="githubusername"
          />
          <small className="form-text"
            >If you want your latest repos and a Github link, include your
            username</small
          >
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself"    
            onChange={this.onChange}
            value={bio}name="bio"/>
         <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button  onClick={() =>this.setState({showSocial: !this.state.showSocial})}
          type="button" className="btn btn-light">
            Add Social Network Links
          </button >
          <span>Optional</span>
        </div>

        {showSocial && <Fragment>
            <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x"></i>
          <input type="text" 
          placeholder="Twitter URL" 
          onChange={this.onChange}
          value={twitter}
          name="twitter" />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-facebook fa-2x"></i>
          <input type="text"
           placeholder="Facebook URL" 
           onChange={this.onChange}
          value={facebook}
           name="facebook" />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-youtube fa-2x"></i>
          <input type="text" 
          placeholder="YouTube URL"
          onChange={this.onChange}
          value={youtube}
          name="youtube" />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-linkedin fa-2x"></i>
          <input type="text" 
          onChange={this.onChange}
          value={linkedin}
          placeholder="Linkedin URL" 
          name="linkedin" />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x"></i>
          <input type="text" 
          placeholder="Instagram URL"
          onChange={this.onChange}
          value={instagram}
          name="instagram" />
        </div>

        </Fragment>}
        
        
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
  

            </div>
         );
    }
}

 const mapStateToProps =(state)=>({
     profile:state.profile
 })

export default connect(mapStateToProps , {createProfile, getCurrentProfile}) (withRouter(EditProfile));