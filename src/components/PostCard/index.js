import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardActionArea, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
    },
    caption: {
        marginRight: theme.spacing(1),
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px'
    },
    image: {
        height: 300,
        width: '100%',
        maxWidth: '100%',
    },
    content: {
        padding: 0,

    },
    favorite: {
        marginLeft: 'auto'
    }
}))

function PostCard({ post }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar src={post.author.avatar} />}
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                        <Typography variant="caption" classes={classes.caption}> {'Avaliado por'} </Typography>
                        <Typography variant="subtitle2" classes={classes.caption}> {post.author.name} </Typography>
                        <Typography variant="caption" classes={classes.caption}> {post.date} </Typography>
                    </div>} />

            <CardContent className={classes.content}>
                <Typography
                    className={classes.message}
                    variant="body1">
                    {post.hashtags}
                </Typography>
                <CardActionArea>
                    <img src={post.image} alt="img" className={classes.image} />
                </CardActionArea>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                    <Typography
                        style={{ cursor: 'pointer' }}
                        color="textSecondary"
                        variant="body2">
                        {'10'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                    <MessageIcon />
                    <Typography
                        className={classes.reactions}
                        color="textSecondary"
                        variant="body2">
                        {'30'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="favorite" className={classes.favorite}>
                    <BookmarkIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default PostCard;