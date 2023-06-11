import { Button, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


function Detail(props) {

    let { id } = useParams();
    let [탭, 탭변경]=useState(0);


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <br></br>
                        <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/68890/product/image_1679504526691_2500.jpg"
                            width="80%" />
                    </div>
                    <div className="col-md-6 mt-4" style={{marginLeft: '30px'}}>
                        <br></br>
                        <h2 className="pt-5" style={{marginLeft: '30px'}}>{props.acc[0].title}</h2>
                        <br></br>
                        <p style={{marginLeft: '30px'}}>{props.acc[0].price}원</p>
                        <p style={{marginLeft: '30px'}}>{props.acc[0].content}</p>
                        <Button variant="success" style={{marginLeft: '30px'}}>주문하기</Button>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>

            <Nav fill variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(0) }} eventKey="link0">상세정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(1) }}eventKey="link1">리뷰</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(2) }}eventKey="link2">판매자정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Q&A
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <Tab 탭={탭}/>

        </>

    )
}

function Tab (props) {
    if (props.탭 == 0) {
        return <div style={{textAlign: 'center'}}><br/><br/>프랑스에서 직수입해온 실버소재로 
            기존 실버보다 더 견고하며<br/> 밝은 실버 컬러를 경험하실 수 있습니다.<br/>
            또한 실버라는 소재 특성상 공기와 마찰이 자주 닿으면 
            변색되지만<br/> silver ww 제품은 쉽게 변색되지 않습니다.<br/><br/><br/></div>
    }
    if (props.탭 == 1) {
        return <div style={{textAlign: 'center', color : 'green'}}><br/><br/>reatt*****님(2023.06.05) 여름이라서 시원한 실버 착용하려고<br/>
        구매했는데 맘에 들고 확실히 다른 악세사리보다 튼튼한 느낌이 드네요!<br/><br/>ABC1995****님(2023.06.10) 이거 보고 실버면 다 똑같지 얼마나 견고하려나 <br/>
        반신반의하면서 샀는데 오 다르긴 달라요! 이 퀄리티에 이 가격? 실화 또 방문할게요!<br/><br/><br/></div>
    }
    if (props.탭 == 2) {
        return <div style={{textAlign: 'left', marginLeft: '230px'}}><br/><br/>판매자 지정택배사 : 한진택배/ 
        반품 배송비: 편도 3300원 (최초 배송비 무료인 경우 6600원 부과)<br/>
        보내실 곳: 대전광역시 대덕구 한석봉로 11번길 25<br/> 
        반품과 교환 사유에 따른 요청기간: 구매자 단순 변심은 상품 수령후 7일 이내 
        표시/<br/> 광고와 상이, 계약 내용과 다르게 이행된 경우 상품 수령후 3개월 이내 가능<br/><br/>
         
        상호명: 아루엘(사업자/ 간이 사업자)
        사업자 등록번호: 55587459640 
        대표자: 이청아<br/><br/><br/></div>
    }
}

export default Detail;