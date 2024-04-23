import React, { useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import BasicTable from "../../../components/GenericTable";
import ArticleTable from "./articleTable";
import AddArticle from "./addArticle";
import ManageCategory from "./manageCategory";
import Products from "../../../api/productsManages";
import GenericEmptyTable from "../../../components/GenericEmptyTable";
import {TextField } from "@mui/material";
import PageParam from "../../../components/PageParam";
import { useTableFilters } from "../../../hooks/searchParams";
 
const Articles = () => {
  const [loading, setLoading] = useState(""); 
  const [table, setTable] = useState(null);
  /* const navigate = useNavigate(); */
  /* const [params, setParams]= useSearchParams(); */
  const [params, setParams, handleSearch, handleSearchEmpty, UdateTable] = useTableFilters( Products, setTable, setLoading );




  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom component="div"> 
          <strong>Artículos </strong>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
         {/*    <FormControl
              fullWidth
              variant="standard"
              sx={{ m: 1, minWidth: 220 }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Artículos
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={category}
                onChange={handleChangeCategory}
              >
                <MenuItem value="">
                  <em>none</em>
                </MenuItem>
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
              </Select>
              
            </FormControl> */}
                 {params && <FormControl
                fullWidth
                variant="outlined"
                sx={{ /* m: 1, */ minWidth: 220 }}
                value={params.get("pattern") || ""}
                >
                <TextField variant="outlined" name="pattern"/* id="standard-basic" */ value={params.get("pattern") || ""} label={"Buscar por nombre"} size="small" onChange={handleSearchEmpty}/>
                </FormControl>}
          </Grid>
          <Grid item xs={0} sm={1} md={3} lg={4} xl={4} />
          <Grid item xs={12} sm={5} md={3} lg={3} xl={3}>
            <ManageCategory />
          </Grid>
          <Grid item xs={12} sm={5} md={3} lg={2} xl={2}>
            <AddArticle udateProducts={UdateTable} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        {table && (
          <>
          <BasicTable
            titles={["Imagen", "Nombre / SKU", "Estatus", "Categoría", "Acción"]}
          >
            {table.data.map((data) => (
              <ArticleTable
                key={data.id}
                id={data.id}
                name={data.name}
                data={data}
                /* img={data.img} */
                category={data.category}
                status={data.is_active}
    
              />
            ))}
          </BasicTable>

             <PageParam  totalpages={table.pagination} params={params} handleChange={handleSearch} />

        </>

        )}
 {/*           {!table && 

              <GenericEmptyTable/>
            } */}
            {!table && loading && (
            <Grid container justifyContent="center" p={"24px"}>
              <CircularProgress />
            </Grid>
          )}
          {!table && !loading && !params.get("pattern") && <GenericEmptyTable />}
          {!table && !loading && params.get("pattern") && <GenericEmptyTable msg={`No se encontró resultado para "${params.get("pattern")}"`} />}
      </Grid>
    </Grid>
  );
};

export default Articles;
