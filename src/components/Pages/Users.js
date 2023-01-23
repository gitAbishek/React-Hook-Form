import { Box, Grid, GridItem} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  

  useEffect(()=>{
    let url = `http://blogpost.test.test/wp-json/wp/v2/users`;
    const fetchData = async () => {
      await axios
        .get(url)
        .then((res) => {
          setUsers(res.data);
          console.log('backend',res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData()
  },[])

  return (
    <Box
      h="70vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="20"
    >
      <Box w="50%">
        <Grid templateColumns="repeat(3, 1fr)" gap={5} color="red" align="center">
          <GridItem  h="10" >
            ID
          </GridItem>
          <GridItem  h="10" >
            USERS
          </GridItem>

          <GridItem h="10" >
            SLUG
          </GridItem>

         
        </Grid>
      

      {users.map((curELem) => {
        return (
          
            <Grid templateColumns="repeat(3, 1fr)" gap={5} color="pink.500" align="center" fontStyle="bold">
              <GridItem  h="10" >
                {curELem.id}
              </GridItem>
              <GridItem  h="10" >
                {curELem.name}
              </GridItem>

              <GridItem  h="10" >
                {curELem.slug}
              </GridItem>
            </Grid>
          
        );
      })}
      </Box>
    </Box>
  );
};

export default Users;
