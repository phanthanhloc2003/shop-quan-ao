import { Box, Container, Grid, Paper } from "@mui/material";
import LeftPanel from "../../compomet/LeftPanel";
import RightPanel from "../../compomet/RightPanel";
import Header from "../../compomet/Header";

function Account() {
    return (
        <div>
            <Header />
            <Box className="py-[10px]">
                <Container className="flex py-[20px]">
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

                        <Grid item style={{ flex: 1 }}>
                            <RightPanel />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default Account;
