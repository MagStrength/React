import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";

export function ChatsList({ chatsList }) {
    return (
        <List>
            {chatsList.map(({ id, name }) => (
                <>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src="/broken-image.jpg"></Avatar>
                        </ListItemAvatar>

                        <ListItemText
                            primary={name}
                            key={id}
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </>
            ))}
        </List>
    );
}