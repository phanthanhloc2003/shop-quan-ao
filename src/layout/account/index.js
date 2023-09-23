import { Box, Container, Grid, Paper } from "@mui/material";
import LeftPanel from "../../compomet/LeftPanel";
import RightPanel from "../../compomet/RightPanel";




function Account() {

    return (
        <Box className="py-[10px]">
            <Container className="flex py-[20px] ">
                <Grid container spacing={0.5}>
                    <Grid item>
                        <Paper
                            style={{
                                border: "none",
                                background: "transparent",
                                boxShadow: "none",
                            }}
                        >
                            <LeftPanel />
                        </Paper>
                    </Grid>

                    <Grid item className="flex-grow">
                        <RightPanel />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Account;
