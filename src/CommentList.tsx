type User = {
  uid: string;
  name: string;
};

type Comment = {
  rpid: number;
  user: User;
};

const list: Comment[] = [
  { rpid: 3, user: { uid: "123456", name: "qwq" } },
  { rpid: 4, user: { uid: "654321", name: "alice" } },
  { rpid: 5, user: { uid: "789012", name: "bob" } },
  { rpid: 6, user: { uid: "345678", name: "charlie" } },
];

export default function CommentList({ color }) {
  return (
    <div className="List">
      {list.map((item) => {
        const uidNum = Number(item.user.uid);
        const isEven = !isNaN(uidNum) && uidNum % 2 === 0;

        return (
          <div key={item.rpid} className="comment-item">
            <p>
              User ID: {item.user.uid}
              {item.user.name === "qwq" && <span style={{ color }}>first</span>}
            </p>
            <p>Name: {item.user.name}</p>
            <span className="num">{isEven ? "EVEN" : "ODD"}</span>
          </div>
        );
      })}
    </div>
  );
}
