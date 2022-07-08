import React, { useEffect, useState } from 'react'

 
const Scrolling = () => {

    const [scroll, setScroll] = useState(0)
    useEffect ( () => {
        document.addEventListener( 'scroll', () => {
            setScroll(document.documentElement.scrollTop);
        })
    },[scroll]);

    const handleClick = () => {
        document.documentElement.scrollTop = 0;
    }
  return (
    <div className='scrolling'>
        <h1 className='title'>NGƯỢC CHIỀU GIÓ THỔI!</h1>
        <p>Một trong những câu hỏi mình đã tự chất vấn bản thân từ khi mình mười tuổi: Tại sao mình là người Việt Nam, nhưng mình phải sống bằng những giá trị đạo đức của người Trung Quốc?

Đó là mùa hè cuối cùng của thời Tiểu học, khi đó mình mượn được một cuốn “Cổ học tinh hoa” từ tủ sách của cô giáo Hương, dạy văn cấp 3 ở cùng khu tập thể nhà mình. Cô có một đứa con gái cũng bằng tuổi mình, vì chơi với bạn, mình mới có may mắn được đọc những cuốn sách không phải sách giáo khoa lớp 5. Đọc mỗi cuốn sách chỉ mất một ngày. Nhưng suy nghĩ về sách thì triền miên từ tháng này qua tháng khác, cho đến lúc nào mà có một cuốn sách mới lại choán hết tâm trí mình.

Cuốn “Cổ học tinh hoa” ngày đó dưới con mắt của một cô bé con được hiểu là những triết lý sống, những quan điểm làm người của… người Trung Quốc cổ đại. Đọc hết sách ấy, mình chỉ băn khoăn rằng: Thế người Trung Quốc bây giờ họ có sống được một cách sâu sắc thế này không? Nếu tác giả giúp ta đúc kết được hàng trăm bài học nhân sinh đắt giá từ những điển tích sách vở Tàu xa xưa, phải chăng thứ mà trong trang sách nói chính là một mẫu mực để người ngoài sách sống theo? Nhưng mình là người Tàu hay người Việt?

Đó là lý do từ sau cuốn “Cổ học tinh hoa”, mình cự tuyệt không đọc tất cả những cuốn sách nào nổi tiếng của Tàu mà người ta khen lấy khen để, từ Hồng Lâu Mộng cho tới các bộ truyện chưởng, từ Tam Quốc Diễn Nghĩa cho tới Thủy Hử. Kể cả phim! Nếu mình đọc mà rồi cũng lại chỉ để tấm tắc như mọi người, thì đọc làm gì? Nếu đọc nát nghìn trang sách chỉ để hiểu điển tích, tâm đắc thuộc làu cổ sử, nhưng chất bao nhiêu gánh nặng lên trí nhớ chỉ để hài lòng là, người khác đọc rồi mà ta cũng đã đọc, ta chẳng thua kém ai, ai nói gì ta cũng biết, thì chi bằng, đọc những bài bình sách, cảm tưởng của người đọc còn thú vị hơn. Hay bỏ thời gian ra để đọc những trang sách kém nổi tiếng hơn, nhưng tự mình rút ra được cảm nhận tươi mới, không bị ám ảnh bởi nhận xét của người khác, thì vẫn đáng để làm hơn nhiều.

Lớn hơn chút nữa, cái mình sợ nhất trên đời là một cuốn sách mang tên “Đắc nhân tâm”. Không hiểu vì sao mình lại sợ một cuốn sách Mỹ mà cho đến ngày hôm nay mình chưa hề đọc một chữ nào trong ấy? Có lẽ nỗi sợ hãi của một cô thiếu nữ là bởi, mọi bình luận sách mình đọc đều cho rằng, đó là một cuốn phải đọc nếu muốn trở thành một người thành đạt, hoàn hảo, tâm lý, được lòng người, thành công trong công việc và giao tiếp, hoàn thiện bản thân v.v… Triết lý làm người thật là quý giá. Nhưng, sự sống của mình không đáng giá sao? Sao một mặt ta kêu gọi hồn nhiên như cỏ hoa, trân trọng mỗi giọt sương, mỗi phút sống, một mặt ta cố gắng tìm hiểu xem người khác đang sống theo kiểu gì, mình nắn lại để sống kiểu gì thì vừa lòng đám đông?

Sau này ông chồng mình trở thành… chồng mình, ông ấy thường trách, vợ chẳng bao giờ tin vào kinh nghiệm của người khác, chẳng biết tránh chướng ngại vật, mà cứ phải tự mình vấp ngã!!!

Rồi trưởng thành thêm một chút nữa, vào lúc được học lý luận truyền thông, mình mới hiểu ra lý do mình đã từ chối những thứ thịnh hành trong trong xã hội: Nếu coi mỗi cuốn sách, mỗi tấm biển chỉ đường, mỗi kinh nghiệm truyền khẩu, một bài tung hô nhà văn này, một bài báo phỉ nhổ một cuốn sách khác… là một thông điệp truyền thông, thì độc giả của truyền thông đại chúng luôn mang một chút tâm lý phản đối, từ chối những thông điệp ấy. Nên độc giả một mặt tung hô và hối hả tiếp nhận, một mặt sẽ phản đối và từ chối. Và mình chỉ là một phản lực nhỏ nhoi rất bình thường trong xã hội. Chỉ là, đám đông luôn ngờ vực “phản lực” của chính họ. Còn mình, mình tin nhiều hơn vào “phản lực” nhỏ bé của mình. Dù, ta sẽ có lẽ cả đời ngược chiều gió thổi.

. Hồi còn đi học, chừng hơn hai mươi năm trước, mình nghĩ những người thành đạt trong xã hội phải là những người đi xe máy và gặp nhau trao danh thiếp. Cho đến lúc, tự mua được xe máy và có một công việc đầu tiên được trả lương, thì nghĩ: Người thành đạt là người nổi tiếng và dư tiền mua sắm trang sức.

Vài đôi năm sau, đường đời khiến mình nghi ngờ thực tài của tất cả những người nổi tiếng mình gặp, và không mảy may thấy chút giá trị nào trên những món đồ trang sức đính bảng giá kèm nữa, thì mình nghĩ: Thành đạt là có một tổ ấm gia đình và một ngôi nhà của riêng mình.

Vào lúc có một người đàn ông nói, anh sẵn sàng trao em trái tim anh và túi tiền của anh, miễn là em ở nhà làm máy đẻ và máy giặt, máy hút bụi, thì anh sẵn sàng làm máy ATM của em, thì mình nghĩ, thành đạt là một phụ nữ tự do.

Vài đôi năm nữa trôi qua, vào lúc bối rối giữa tự do, mình nhận ra: Cái mình cần hóa ra không phải là thành đạt! Không phải là tiền, danh thiếp, ngôi nhà, những lời khen tặng. Mà là, sống theo cách của mình, nghĩ theo cách mình cảm nhận, nói những lời của chính tâm hồn mình, yêu được bản thân và tha thứ được cả những kẻ bỉ ổi. Vì ta chẳng thay đổi được cuộc sống này, nhưng ta có thể thay đổi cách sống và cách nhìn nhận.</p>
        { scroll > 0? <button onClick={handleClick}>Back to top</button> : null}
    </div>
  )
}

export default Scrolling