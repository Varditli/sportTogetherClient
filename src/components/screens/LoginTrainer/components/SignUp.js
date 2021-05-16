import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../CustomButtons/Button"
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import {useStyles, Label, InputWrapper, Listbox, Tag} from "../styles";
import CardFooter from "../../../Card/CardFooter";
import CardBody from "../../../Card/CardBody";
import { ContactsOutlined, ContactSupportOutlined, Photo } from "@material-ui/icons";


/* eslint-disable no-use-before-define */  //sportType imports
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import { createGlobalStyle } from "styled-components";


export default function Signup(types) {
  const history = useHistory();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [sportType, setSportType] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [photo, setPhoto] = useState("")
  const allTypes = types.value
  const classes = useStyles();
  const PostDataTrainer = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      //   M.toast({ html: "Invalid email", classes: "#ff4081 pink accent-2" });
      return;
    }

    console.log(value)
    
    fetch(`${process.env.REACT_APP_SERVER}/signupTrainer`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        age,
        experience,
        tel,
        sportType : value
        //photo
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log("successfully added Trainer");
          window.location.reload("false");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

    //sportType const
    const {
      getRootProps,
      getInputLabelProps,
      getInputProps,
      getTagProps,
      getListboxProps,
      getOptionProps,
      groupedOptions,
      value,
      focused,
      setAnchorEl,
    } = useAutocomplete({
      id: 'customized-hook-demo',
      defaultValue: [allTypes[0]],
      multiple: true,
      options: allTypes,
      getOptionLabel: (option) => option.name,
    });

console.log(sportType)

  return (
      <form className={classes.form} >
        <CardBody>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Name"
            name="username"
            autoComplete="name"
            autoFocus
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="tel"
            label="tel"
            name="tel"
            autoFocus
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="age"
            label="Age"
            name="age"
            autoFocus
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="experience"
            label="experience"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
      <NoSsr>
      <div>
        <div {...getRootProps()}>
          <Label {...getInputLabelProps()}>Sport Types</Label>
          <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}
            value={sportType}
            onChange={(e) => setSportType(e.target.value)}>
              {console.log(value)}
            {value.map((option, index) => (
              <Tag label={option.name} {...getTagProps({ index })} />
            ))}

            <input {...getInputProps()} />
          </InputWrapper>
        </div>
        {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li {...getOptionProps({ option, index })}>
                <span>{option.name}</span>
                <CheckIcon fontSize="small" />
              </li>
            ))}
          </Listbox>
        ) : null}
      </div>
    </NoSsr>
        </CardBody> 
          <Button onClick={() => PostDataTrainer()} round color="primary">SignUp</Button> 
      </form>
  );
}


