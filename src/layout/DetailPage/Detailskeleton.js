import { Box, Grid, Skeleton } from "@mui/material";

DetailSkeleton.defaultProps = {
    length: 1,
}

function DetailSkeleton({ length }) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Box padding={1}  >
                            <Skeleton variant="rect" width="100%" height={208} />

                        </Box>
                    </Grid>

                ))}
            </Grid>
        </Box>
    );
}

export default DetailSkeleton;