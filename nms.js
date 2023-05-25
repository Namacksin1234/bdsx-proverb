"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
command_1.command.register("속담", "랜덤으로 속담을 보여줍니다").overload(async (param, origin) => {
    const player = origin.getEntity();
    if (player === null)
        return;
    const ni = player.getNetworkIdentifier();
    var random = Math.floor(Math.random() * 50) + 1;
    if (random === 1) {
        proverbing(ni, "가는 날이 장날이다", random);
    }
    else if (random === 2) {
        proverbing(ni, "가는 말이 고와야 오는 말이 곱다", random);
    }
    else if (random === 3) {
        proverbing(ni, "가랑비에 옷 젖는 줄 모른다", random);
    }
    else if (random === 4) {
        proverbing(ni, "가랑잎이 솔잎더러 바스락거린다고 한다", random);
    }
    else if (random === 5) {
        proverbing(ni, "가재는 게 편이다", random);
    }
    else if (random === 6) {
        proverbing(ni, "가지 많은 나무에 바람 잘 날 없다", random);
    }
    else if (random === 7) {
        proverbing(ni, "간에 가서 붙고 쓸개에 가서 붙는다", random);
    }
    else if (random === 8) {
        proverbing(ni, "간에 기별도 안 간다", random);
    }
    else if (random === 9) {
        proverbing(ni, "간이 콩알만 해지다", random);
    }
    else if (random === 10) {
        proverbing(ni, "갈수록 태산", random);
    }
    else if (random === 11) {
        proverbing(ni, "같은 값이면 다홍치마", random);
    }
    else if (random === 12) {
        proverbing(ni, "개구리 올챙이 적 생각 못한다", random);
    }
    else if (random === 13) {
        proverbing(ni, "개밥에 도토리", random);
    }
    else if (random === 14) {
        proverbing(ni, "개천에서 용 난다", random);
    }
    else if (random === 15) {
        proverbing(ni, "고기는 씹어야 맛이요, 말은 해야 맛이라", random);
    }
    else if (random === 16) {
        proverbing(ni, "고래 싸움에 새우 등 터진다", random);
    }
    else if (random === 17) {
        proverbing(ni, "고양이 목에 방울 달기", random);
    }
    else if (random === 18) {
        proverbing(ni, "공든 탑이 무너지랴", random);
    }
    else if (random === 19) {
        proverbing(ni, "구더기 무서워 장 못 담글까", random);
    }
    else if (random === 20) {
        proverbing(ni, "구슬이 서 말이라도 꿰어야 보배라", random);
    }
    else if (random === 21) {
        proverbing(ni, "귀에 걸면 귀걸이, 코에 걸면 코걸이", random);
    }
    else if (random === 22) {
        proverbing(ni, "그림의 떡", random);
    }
    else if (random === 23) {
        proverbing(ni, "금강산도 식후경", random);
    }
    else if (random === 24) {
        proverbing(ni, "까마귀 날자 배 떨어진다", random);
    }
    else if (random === 25) {
        proverbing(ni, "꿩 대신 닭", random);
    }
    else if (random === 26) {
        proverbing(ni, "꿩 먹고 알 먹기", random);
    }
    else if (random === 27) {
        proverbing(ni, "남의 잔치에 감 놓아라 배 놓아라 한다", random);
    }
    else if (random === 28) {
        proverbing(ni, "낫 놓고 기역자도 모른다", random);
    }
    else if (random === 29) {
        proverbing(ni, "낮말은 새가 듣고 밤말은 쥐가 듣는다", random);
    }
    else if (random === 30) {
        proverbing(ni, "내 코가 석 자", random);
    }
    else if (random === 31) {
        proverbing(ni, "누워서 침 뱉기", random);
    }
    else if (random === 32) {
        proverbing(ni, "늦게 배운 도둑이 날 새는 줄 모른다", random);
    }
    else if (random === 33) {
        proverbing(ni, "다 된 죽에 코 풀기", random);
    }
    else if (random === 34) {
        proverbing(ni, "달면 삼키고 쓰면 뱉는다", random);
    }
    else if (random === 35) {
        proverbing(ni, "닭 잡아 먹고 오리발 내민다", random);
    }
    else if (random === 36) {
        proverbing(ni, "도둑이 제 발 저린다", random);
    }
    else if (random === 37) {
        proverbing(ni, "돌다리도 두들겨 보고 건너라", random);
    }
    else if (random === 38) {
        proverbing(ni, "되로 주고 말로 받는다", random);
    }
    else if (random === 39) {
        proverbing(ni, "등잔 밑이 어둡다", random);
    }
    else if (random === 40) {
        proverbing(ni, "땅 짚고 헤엄치기", random);
    }
    else if (random === 41) {
        proverbing(ni, "똥 묻은 개가 겨 묻은 개 나무란다", random);
    }
    else if (random === 42) {
        proverbing(ni, "뛰는 놈 위에 나는 놈 있다", random);
    }
    else if (random === 43) {
        proverbing(ni, "마른 하늘에 날벼락", random);
    }
    ;
}, {});
async function proverbing(ni, proverb, random) {
    const player = ni.getActor();
    if (player === null)
        return;
    player.sendMessage(proverb);
    var random = 0;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMENBQXVDO0FBRXZDLGlCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ3ZFLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQyxJQUFJLE1BQU0sS0FBSyxJQUFJO1FBQUUsT0FBTztJQUM1QixNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUN6QyxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLENBQUM7SUFDcEQsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2QsVUFBVSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDeEM7U0FBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckIsVUFBVSxDQUFDLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNoRDtTQUFNLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyQixVQUFVLENBQUMsRUFBRSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzdDO1NBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLFVBQVUsQ0FBQyxFQUFFLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDbEQ7U0FBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckIsVUFBVSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDdkM7U0FBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckIs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